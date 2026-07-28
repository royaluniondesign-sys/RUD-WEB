#!/bin/bash
# IndexNow bulk submission — royaluniondesign.com
# Run once after deploy: bash scripts/submit-indexnow.sh

KEY="91c6564db4e2ef78e2a7ebb744372de2"
HOST="www.royaluniondesign.com"

curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{
  \"host\": \"$HOST\",
  \"key\": \"$KEY\",
  \"keyLocation\": \"https://$HOST/$KEY.txt\",
  \"urlList\": [
    \"https://$HOST/\",
    \"https://$HOST/rotulos\",
    \"https://$HOST/contact\",
    \"https://$HOST/pricing\",
    \"https://$HOST/services\",
    \"https://$HOST/blog\",
    \"https://$HOST/work\",
    \"https://$HOST/about\",
    \"https://$HOST/faq\",
    \"https://$HOST/rotulos/neon-led-barcelona\",
    \"https://$HOST/rotulos/letras-corporeas-barcelona\",
    \"https://$HOST/rotulos/cajas-de-luz-barcelona\",
    \"https://$HOST/rotulos/vinilos-escaparate-barcelona\",
    \"https://$HOST/rotulos/senaletica-interior-barcelona\",
    \"https://$HOST/rotulos/publicidad-exterior-barcelona\",
    \"https://$HOST/rotulos/eixample-barcelona\",
    \"https://$HOST/rotulos/gracia-barcelona\",
    \"https://$HOST/rotulos/poblenou-barcelona\",
    \"https://$HOST/rotulos/sarria-barcelona\",
    \"https://$HOST/rotulos/sants-barcelona\",
    \"https://$HOST/rotulos/cerdanyola-del-valles\",
    \"https://$HOST/rotulos/hospitalet-de-llobregat\",
    \"https://$HOST/rotulos/badalona-barcelona\",
    \"https://$HOST/rotulos/born-barcelona\",
    \"https://$HOST/rotulos/sant-cugat-del-valles\",
    \"https://$HOST/rotulos/terrassa-barcelona\",
    \"https://$HOST/blog/cajas-de-luz-barcelona-precio-tipos\",
    \"https://$HOST/blog/rotulos-luminosos-barcelona-precio-tipos-instalacion\",
    \"https://$HOST/blog/neon-led-barcelona-precio-instalacion\",
    \"https://$HOST/blog/letras-corporeas-barcelona-tipos-precios\",
    \"https://$HOST/blog/vinilos-escaparate-barcelona-precio-instalacion\",
    \"https://$HOST/blog/branding-ecommerce-shopify-barcelona\",
    \"https://$HOST/blog/identidad-visual-vs-logo-diferencia\",
    \"https://$HOST/blog/estrategia-marca-startups-barcelona\",
    \"https://$HOST/blog/nextjs-vs-wordpress-2026\",
    \"https://$HOST/blog/ia-local-vs-nube-agencias-creativas\",
    \"https://$HOST/blog/aura-el-agente-ia-autonomo-que-lidera-la-operacion-de-rud-st\",
    \"https://$HOST/blog/automatizacion-marketing-agencias-n8n\",
    \"https://$HOST/work/sante\",
    \"https://$HOST/work/novae\",
    \"https://$HOST/work/lumina\",
    \"https://$HOST/work/idnt\",
    \"https://$HOST/work/kopess\",
    \"https://$HOST/work/oxyzen\",
    \"https://$HOST/work/aurum\"
  ]
}" -w "\nHTTP %{http_code}\n"

echo ""
echo "Done. HTTP 200 = accepted, 202 = queued, 422 = key file not found (check deploy)."
