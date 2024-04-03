// api/artCenters.js

export default async (req, res) => {
  const { page = 1 } = req.query;
  const itemsPerPage = 8;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage;

  // Fetch data from the external API
  const response = await fetch('https://openapi.izmir.bel.tr/api/ibb/cbs/galerivesalonlar');
  const data = await response.json();

  // Düzgün karakter kodlaması için özel karakterleri düzelt
  const normalizedArtCenters = data.onemliyer.map(artCenter => {
    // Tüm özel karakterleri düzeltmek için düzenli ifade kullanılıyor
    const normalizedDescription = artCenter.ACIKLAMA.replace(//g, "'")
                                                     .replace(//g, "'")
                                                     .replace(//g, '"')
                                                     .replace(//g, '"');

    return {
      ...artCenter,
      ACIKLAMA: normalizedDescription,
    };
  });

  // Select art centers for the current page
  const artCenters = normalizedArtCenters.slice(startIndex, endIndex);

  // Return the selected art centers as JSON
  res.status(200).json({ artCenters });
};
