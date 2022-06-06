import React from 'react';
import '../assets/css/personnel.css';

const Personnel = () => {
  return (
    <div>
        <h2 className="page-hearder">Nhân sự</h2>
        <div className="personnel-table">
            <table id="customers">
                <tbody>
                    <tr>
                        <th>STT</th>
                        <th>Tên nhân viên</th>
                        <th>Chức danh</th>
                        <th>Nhóm</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Nguyễn Thị Hồng Ngọc</td>
                        <td>Tổ trưởng</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Nguyễn Thị Hồng Ngọc</td>
                        <td>Tổ trưởng</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Nguyễn Thị Hồng Ngọc</td>
                        <td>Tổ trưởng</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Nguyễn Thị Hồng Ngọc</td>
                        <td>Tổ trưởng</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Nguyễn Thị Hồng Ngọc</td>
                        <td>Tổ trưởng</td>
                        <td>1</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Personnel;
