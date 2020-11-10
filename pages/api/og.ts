import { NextApiRequest, NextApiResponse } from 'next'
import { getScreenshot, getHtml } from '@/lib/og'

/**
 * Most common OG image size
 */
const DefaultImageSize = {
  height: 630,
  width: 1200
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const category = req.query.category as string
    const title = req.query.title as string

    const html = getHtml(category, title)
    const file = await getScreenshot({
      html,
      width: DefaultImageSize.width,
      height: DefaultImageSize.height,
      isDev: !process.env.IS_PRODUCTION
    })

    res.statusCode = 200
    res.setHeader('Content-Type', `image/png`)
    res.setHeader(
      'Cache-Control',
      `max-age=${60 * 60 * 24 * 365}, public, stale-while-revalidate`
    )
    res.end(file)
  } catch (e) {
    console.error(e)

    res.statusCode = 500
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Error, image can not be generated!</h1>')
  }
}
