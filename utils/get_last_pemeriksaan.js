function getLastPemeriksaan(data) {
  let lastDate = null;
  let lastExamination = null;

  for (const trimester in data) {
    data[trimester].forEach((record) => {
      const currentDate = new Date(record.tanggal_pemeriksaan);
      if (!lastDate || currentDate > lastDate) {
        lastDate = currentDate;
        lastExamination = record;
      }
    });
  }

  return lastExamination;
}

export { getLastPemeriksaan };
