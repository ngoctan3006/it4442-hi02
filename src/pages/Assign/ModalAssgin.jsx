import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useForm } from 'react-hook-form';
import {
  Button,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from 'reactstrap';

const ModalAssgin = ({ modal, setModal }) => {
  const { control } = useForm();

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Thêm công việc mới</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label>
            Tên công việc
            <Input type="text" placeholder="Nhập tên công việc" />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>
            Nội dung công việc
            <Input type="textarea" placeholder="Nhập nội dung công việc" />
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Nhóm</Label>
          <Input type="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </Input>
        </FormGroup>
        <FormGroup id="date">
          <div id="date-start">
            <Label for="exampleSelect">Ngày bắt đầu</Label>
            <Controller
              control={control}
              name="dateInput"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select date"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
          </div>
          <div id="date-end">
            <Label for="exampleSelect">Ngày kết thúc</Label>
            <Controller
              control={control}
              name="dateInput"
              render={({ field }) => (
                <DatePicker
                  placeholderText="Select date"
                  onChange={(date) => field.onChange(date)}
                  selected={field.value}
                />
              )}
            />
          </div>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Add
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalAssgin;
