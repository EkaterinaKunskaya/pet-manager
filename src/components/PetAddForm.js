import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  DatePicker,
  Popconfirm
} from 'antd';
import { nanoid } from 'nanoid';

import '../styles/PetAddForm.css';

const { TextArea } = Input;


const PetAddForm = ({ firebase }) => {
  const { addNewCard } = firebase;
  let navigate = useNavigate();

  let file;
  function donwloadImg(e) {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = function () {
      file = reader.result;
    }
    return file;
  }

  function finishFunk(e) {
    const newCard = {
      id: nanoid(),
      petName: e.petName.trim(),
      view: e.view,
      breed: e.breed.trim(),
      sex: e.sex,
      birthday: `${e.birthday.$D}.${e.birthday.$M + 1}.${e.birthday.$y}`,
      microchipNumber: (e.microchipNumber) ? e.microchipNumber.trim() : '-',
      stampNumber: (e.stampNumber) ? e.stampNumber.trim() : '-',
      reproduction: e.reproduction,
      notes: (e.notes) ? e.notes.trim() : '',
      img: (e.img) ? file : '',
      procedures: {},
    };

    addNewCard(newCard);
    navigate('/');
  }

  const isMobile = window.innerWidth < 640;

  return (
    <>
      <Form className="PetAddForm" onFinish={finishFunk}
        labelCol={{ span: (isMobile) ? 300 : 10 }} wrapperCol={{ span: (isMobile) ? 300 : 13 }}
        layout={(isMobile) ? "vertical" : "horizontal"} autoComplete="off">
        <h1>Регистрация карточки пушистика</h1>
        <p>Пожалуйста, заполните данную форму для создания индивилуальной карточки питомца.</p>

        <Form.Item
          label="Кличка"
          name="petName"
          rules={[
            {
              required: true,
              message: 'Введите кличку питомца.',
            },
            {
              whitespace: true
            },
            {
              min: 2
            }
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item label="Вид" name='view'
          rules={[
            {
              required: true,
              message: 'Выберите вид питомца.',
            }
          ]}
          hasFeedback
        >
          <Select>
            <Select.Option value="Кошка">Кошка</Select.Option>
            <Select.Option value="Собака">Собака</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Порода" name='breed'
          rules={[
            {
              required: true,
              message: 'Введите породу питомца.',
            },
            {
              whitespace: true
            },
            {
              min: 3
            }
          ]}
          hasFeedback
        >
          <Input />
        </Form.Item>

        <Form.Item label="Пол" name='sex'
          rules={[
            {
              required: true,
              message: 'Выберите пол питомца.',
            }
          ]}
          hasFeedback
        >
          <Select>
            <Select.Option value="Самец">Самец</Select.Option>
            <Select.Option value="Самка">Самка</Select.Option>
            <Select.Option value="Гермафродит">Гермафродит</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Дата рождения" name='birthday'
          rules={[
            {
              required: true,
              message: 'Введите дату рождения.',
            }
          ]}
          hasFeedback
        >
          <DatePicker />
        </Form.Item>

        <Form.Item label="Номер микрочипа" name='microchipNumber'>
          <Input />
        </Form.Item>

        <Form.Item label="Номер клейма" name='stampNumber'>
          <Input />
        </Form.Item>

        <Form.Item label="Сведения о репродукции" name='reproduction'
          rules={[
            {
              required: true,
              message: 'Введите сведения о репродукции.',
            }
          ]}
          hasFeedback
        >
          <Radio.Group>
            <Radio value="Стерилизован(а)"> Стерилизован(а) </Radio>
            <Radio value="Не стерилизиван(а)"> Не стерилизиван(а) </Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="Заметки" name='notes'>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Загрузить фотографию" name='img'>
          <Input type="file" onChange={donwloadImg} />
        </Form.Item>

        <div className='form-btns'>
          <Popconfirm
            placement="topLeft"
            title="Все данные будут утеряны. Выйти на главную страницу?"
            onConfirm={() => {
              navigate('/');
            }}
            okText="Да" cancelText="Нет">
            <Button className='form-btn'>На главную</Button>
          </Popconfirm>

          <Form.Item>
            <Button className='form-btn' type='primary' htmlType='submit'>Добавить карточку</Button>
          </Form.Item>
        </div>
      </Form>
    </>
  );
};

export default React.memo(PetAddForm);