import Work from '../models/work';

export const getWorks = async (req, res) => {
  try {
    const work = await Work.find().limit(10);
    if (!work) {
      return res.status(404).json({ message: 'Không tìm thấy công việc.' });
    }

    res.json({ work });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
