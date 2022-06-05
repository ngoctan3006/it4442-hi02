import React from 'react';
import '../assets/css/assign.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import ModalAssgin from './assign/ModalAssgin';
import { useState } from 'react';

const Assign = () => {

    const [modal, setModal] = useState(false);

    const handleAddAssign = () => {
        setModal(!modal);
    }
  return (
    <div>
        <ModalAssgin modal={modal} setModal={setModal}/>
        <h2 className="page-header">Giao việc</h2>
        <div className="add_assgin">
            <button className="btn btn-primary" onClick={handleAddAssign}><i className="bx bx-plus-medical"></i>Thêm công việc</button>
        </div>
        <div className="assign-table">
            <table id="customers">
                <tbody>
                    <tr>
                        <th>Công việc</th>
                        <th>Nội dung công việc</th>
                        <th>Nhóm</th>
                        <th>Thời hạn (Bắt đầu - Kết thúc)</th>
                        <th>Chỉnh sửa</th>
                    </tr>
                    <tr>
                        <td>Trồng cây</td>
                        <td>Trồng các loại cây cam , bưởi, xoài</td>
                        <td>Nhóm 1</td>
                        <td>06/05/2022-09/05/2022</td>
                        <td>
                            <button className="btn btn-edit"><i className=" bx bx-pencil"></i></button>
                            <button className="btn btn-delete"><i className="bx bx-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Diệt sâu, bệnh</td>
                        <td>Phun thuốc trừ sâu diệt sâu, sử dụng thuốc trừ sâu ABC , nồng độ ...</td>
                        <td>Nhóm 2</td>
                        <td>06/05/2022-09/05/2022</td>
                        <td>
                            <button className="btn btn-edit"><i className=" bx bx-pencil"></i></button>
                            <button className="btn btn-delete"><i className="bx bx-trash"></i></button>
                        </td>
                    </tr>
                    <tr>
                        <td>Bón phân</td>
                        <td>sử dụng phân bón npk...</td>
                        <td>Nhóm 3</td>
                        <td>06/05/2022-09/05/2022</td>
                        <td>
                            <button className="btn btn-edit"><i className=" bx bx-pencil"></i></button>
                            <button className="btn btn-delete"><i className="bx bx-trash"></i></button>
                        </td>
                        
                    </tr>
                    <tr>
                        <td>Dọn cây cỏ</td>
                        <td>Dọn sạch các cây cỏ hoang</td>
                        <td>Nhóm 4</td>
                        <td>06/05/2022-09/05/2022</td>
                        <td>
                            <button className="btn btn-edit"><i className=" bx bx-pencil"></i></button>
                            <button className="btn btn-delete"><i className="bx bx-trash"></i></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default Assign;


