import type { VercelRequest, VercelResponse } from '@vercel/node'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { navn, bedrift, epost, telefon, melding } = req.body

  if (!navn || !epost || !melding) {
    return res.status(400).json({ error: 'Mangler påkrevde felt' })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Konfigurasjonsfeil' })
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: 'AnleggTech AS <noreply@anleggtech.no>',
      to: ['torstein@anleggtech.no'],
      subject: `Ny henvendelse fra ${navn}${bedrift ? ` (${bedrift})` : ''}`,
      html: `
        <h2>Ny henvendelse via anleggtech.no</h2>
        <p><strong>Navn:</strong> ${navn}</p>
        ${bedrift ? `<p><strong>Bedrift:</strong> ${bedrift}</p>` : ''}
        <p><strong>E-post:</strong> ${epost}</p>
        ${telefon ? `<p><strong>Telefon:</strong> ${telefon}</p>` : ''}
        <hr />
        <p><strong>Melding:</strong></p>
        <p>${melding.replace(/\n/g, '<br />')}</p>
      `,
      reply_to: epost,
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Resend error:', error)
    return res.status(500).json({ error: 'Kunne ikke sende e-post' })
  }

  return res.status(200).json({ success: true })
}
