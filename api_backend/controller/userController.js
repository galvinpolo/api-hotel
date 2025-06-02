import User from "../models/userModel.js";

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: { id: req.params.id },
    });
    if (!response) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    // Validasi sederhana
    if (!username || !password) {
      return res
        .status(400)
        .json({ message: "Username dan password wajib diisi" });
    }
    const user = await User.create({ username, password });
    res.status(201).json(user);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Gagal membuat user" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { id: req.params.id } });
    if (!user) {
      return res.status(404).json({ message: "User tidak ditemukan" });
    }
    // Update hanya field yang diberikan
    user.username = username ?? user.username;
    user.password = password ?? user.password;
    await user.save();
    res.status(200).json({ message: "User berhasil diupdate", user });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Gagal mengupdate user" });
  }
};
