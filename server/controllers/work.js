import Work from '../models/work';

export const getWorks = async (req, res) => {
  const { _limit, _page } = req.query;
  const limit = _limit ? parseInt(_limit, 10) : 10;
  const page = _page ? parseInt(_page, 10) : 1;

  try {
    const work = await Work.find()
      .limit(limit)
      .skip(limit * (page - 1));
    if (!work) {
      return res.status(404).json({ message: 'Không tìm thấy công việc.' });
    }

    res.json({ work });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const getWork = async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Không tìm thấy công việc.' });
    }

    res.json({ work });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const createWork = async (req, res) => {
  try {
    const work = await Work.create(req.body);
    if (!work) {
      return res.status(400).json({ message: 'Không tạo được công việc.' });
    }

    res.status(201).json({ work });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const updateWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!work) {
      return res.status(404).json({ message: 'Không tìm thấy công việc.' });
    }

    res.json({ work });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export const deleteWork = async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) {
      return res.status(404).json({ message: 'Không tìm thấy công việc.' });
    }

    res.json({ work });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};
