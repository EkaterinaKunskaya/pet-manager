import React, { useState, useEffect } from 'react';
import { Table, Button, Popconfirm, Avatar } from 'antd';
import { NavLink } from 'react-router-dom'

import pawImg from '../assets/image/paw.png';

let cardsArr;


const CardsTable = ({ firebase, cbForceUpdate }) => {

    const { isLoading, removeCard, cards } = firebase;
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            if (cards) cardsArr = Object.values(cards);
            setData(cardsArr);
            setLoading(isLoading);
        }, [cards]
    );

    const text = 'Вы действительно хотите удалить карточку питомца?'

    const columns = [
        {
            title: 'Фото',
            dataIndex: 'img',
            key: 'img',
            align: 'center',
            width: 100,
            render: (data) => (
                <>
                    {(data) && <Avatar size={85} src={data} />}
                    {(!data) && <Avatar size={85} src={pawImg} />}
                </>
            ),
        }, {
            title: 'Кличка',
            dataIndex: 'petName',
            key: 'petName',
            align: 'center',
            width: 130,
        }, {
            title: 'Вид',
            dataIndex: 'view',
            key: 'view',
            align: 'center',
            width: 130,
        }, {
            title: 'Дейтсвие',
            dataIndex: '',
            key: 'x',
            fixed: 'right',
            align: 'center',
            width: 200,
            render: (data) => (
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <NavLink to="/">
                        <Popconfirm
                            placement="topLeft"
                            title={text}
                            onConfirm={() => {
                                removeCard(data.key)
                                cbForceUpdate(data.key)
                            }}
                            okText="Да" cancelText="Нет">
                            <Button type="primary">
                                Удалить
                            </Button>
                        </Popconfirm>
                    </NavLink>

                    <NavLink to={`/pet-card/${data.key}`}>
                        <Button type="primary">
                            Открыть
                        </Button>
                    </NavLink>

                </div>
            ),
        }];

    const columnsMobile = [
        {
            title: 'Кличка',
            dataIndex: 'petName',
            key: 'petName',
            align: 'center',
            width: 140,
        },
        {
            title: 'Дейтсвие',
            dataIndex: '',
            key: 'x',
            fixed: 'right',
            align: 'center',
            width: 140,
            render: (data) => (
                <NavLink to={`/pet-card/${data.key}`}>
                    <Button type="primary">
                        Открыть
                    </Button>
                </NavLink>
            ),
        }];

    const isMobile = window.innerWidth < 640;

    return (
        <Table
            className='CardsTable'
            columns={(isMobile) ? columnsMobile : columns}
            dataSource={
                data?.map((el) => {
                    return {
                        key: el.id,
                        img: el.img,
                        petName: el.petName,
                        view: el.view,
                    }
                })
            }
            loading={loading}
            size={(isMobile) ? "small" : "midle"}
            pagination={{
                defaultPageSize: 5,
                pageSizeOptions: [5, 10, 20, 50, 100],
                size: 'default',
            }}
        />
    );

};

export default React.memo(CardsTable);