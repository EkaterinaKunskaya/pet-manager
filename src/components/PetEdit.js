import React, { useState, useEffect } from 'react';
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

import '../styles/PetEdit.css';

const { TextArea } = Input;


export const PetEdit = ({ card, firebase }) => {

    const { petName, view, breed, sex, microchipNumber, stampNumber, notes, img, id } = card;
    const {updateCard, removeAvatar} = firebase;
    
    const [imgState, setImgState] = useState();
    let navigate = useNavigate();

    let file;

    useEffect(()=>{
        setImgState(img);
    }, [img]);

    function finishFunk(e) {
        const newCard = {
            id: id,
            petName: e.petName.trim(),
            view: e.view,
            breed: e.breed.trim(),
            sex: e.sex,
            birthday: `${e.birthday.$D}.${e.birthday.$M + 1}.${e.birthday.$y}`,
            microchipNumber: (e.microchipNumber) ? e.microchipNumber.trim() : '-',
            stampNumber: (e.stampNumber) ? e.stampNumber.trim() : '-',
            reproduction: e.reproduction,
            img: (e.img)? file : '',
            notes: (e.notes) ? e.notes.trim() : '',
        };

        updateCard(newCard);
        navigate(`/pet-card/${id}`);
    }

    function donwloadImgEdit(e) {
      let reader = new FileReader();
      if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0]);
      }
      reader.onload = function(){
        file = reader.result;
      }
      return file;
    }

    function deleteAvatar() {
        if (window.confirm('Удалить фото питомца?')) {
            setImgState('');
            removeAvatar(id);
        }
    }

    return (
        <div className="PetEdit">
            <div className="edit-block">
                <h1>Редактирование карты</h1>
                <div className="edit-content">
                    
                    {(imgState) &&
                        <div className="edit-img-block">
                            <img src={card.img} className="edit-img" alt='avatar'/>
                            <button className="edit-img-btn-delete" onClick={deleteAvatar}>Удалить фото</button>
                        </div>
                    }

                    <div className="edit-info">
                        <Form className='PetEditForm' onFinish={finishFunk} labelCol={{ span: 10, }} wrapperCol={{ span: 15, }} layout="horizontal">

                            <Form.Item 
                                label="Кличка" 
                                name='petName'
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
                                <Input placeholder={petName} />
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
                                <Select placeholder={view}>
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
                                <Input placeholder={breed} />
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
                                <Select placeholder={sex}>
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
                                <Input placeholder={microchipNumber} />
                            </Form.Item>

                            <Form.Item label="Номер клейма" name='stampNumber'>
                                <Input placeholder={stampNumber} />
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
                                <Radio.Group >
                                    <Radio value="Стерилизован(а)"> Стерилизован(а) </Radio>
                                    <Radio value="Не стерилизиван(а)"> Не стерилизиван(а) </Radio>
                                </Radio.Group>
                            </Form.Item>

                            {(!imgState) &&
                                <Form.Item label="Загрузить фотографию" name='img'>
                                    <Input type="file" onChange={donwloadImgEdit}/>
                                </Form.Item>
                            }

                            <Form.Item label="Заметки" name="notes">
                                <TextArea rows={4} placeholder={notes} />
                            </Form.Item>

                            <div className='PetEditForm-btns'>
                                <Popconfirm
                                    placement="topLeft"
                                    title="Все данные будут утеряны. Выйти из редактирования?"
                                    onConfirm={() => {
                                        navigate(`/pet-card/${id}`);
                                    }}
                                    okText="Да" cancelText="Нет">
                                    <Button className='PetEditForm-btn'>Отмена</Button>
                                </Popconfirm>

                                <Form.Item>
                                    <Button className='PetEditForm-btn' type='primary' htmlType='submit'>Сохранить</Button>
                                </Form.Item>
                            </div>
                            
                        </Form>

                    </div>
                    
                </div>
            </div>
        </div>
    );

};