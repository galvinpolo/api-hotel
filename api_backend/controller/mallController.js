import Mall from "../models/mallModel.js";

// Ambil semua mall
export const getMalls = async (req, res) => {
  try {
    const malls = await Mall.findAll();
    res.status(200).json(malls);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Gagal mengambil data mall" });
  }
};

// Ambil mall berdasarkan ID
export const getMallById = async (req, res) => {
  try {
    const mall = await Mall.findOne({ where: { id: req.params.id } });
    if (!mall) {
      return res.status(404).json({ message: "Mall tidak ditemukan" });
    }
    res.status(200).json(mall);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Gagal mengambil data mall" });
  }
};

// Membuat mall baru
export const createMall = async (req, res) => {
  try {
    const { nama_mall, deskripsi, lokasi, rating, image } = req.body;
    if (!nama_mall) {
      return res.status(400).json({ message: "Nama mall wajib diisi" });
    }
    const mall = await Mall.create({
      nama_mall,
      deskripsi,
      lokasi,
      rating,
      image,
    });
    res.status(201).json(mall);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Gagal membuat mall" });
  }
};
