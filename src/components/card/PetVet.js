import React, { useState, useEffect, useRef } from 'react';
import { Table, Popconfirm } from 'antd';
import { CloseSquareOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';

import { showRecomendation } from '../helpers/ShowRecomendation';
import { countVetDate } from '../helpers/CountVetDate';

import '../../styles/PetVet.css';

let proceduresArr = [];


const PetVet = ({ card, firebase }) => {

    const { isLoading, addProcedure, removeProcedure } = firebase;
    const { procedures } = card;

    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [disLatestDate, setDisLatestDate] = useState(false);
    const [disSetDate, setDisSetDate] = useState(true);

    let procedureRef = useRef();
    let latestDateRef = useRef();
    let setDateRef = useRef();

    useEffect(
        () => {
            if (procedures) proceduresArr = Object.values(procedures);
            setData(proceduresArr);
            setLoading(isLoading);
        }, [procedures, isLoading]
    );

    function setDateMode(e) {
        if (disSetDate && e.currentTarget.id === 'set-date-btn') {
            setDisLatestDate(true);
            setDisSetDate(false);
        } else if (e.currentTarget.id === 'latest-date-btn') {
            setDisLatestDate(false);
            setDisSetDate(true);
        }
    };

    function setProcedureReminder() {
        let date = (disSetDate) ? countVetDate(latestDateRef.current.value, procedureRef.current.value) : setDateRef.current.value;

        const newProcedure = {
            idProc: nanoid(),
            nameProc: procedureRef.current.value,
            dateProc: date.split('-').reverse().join('.'),
        };

        addProcedure(card.id, newProcedure);
        setData((pre) => { return [...pre, newProcedure] });
    };

    function deleteProcedure(idProc) {
        removeProcedure(card.id, idProc);
        setData((pre) => { return pre.filter((procedure) => procedure.idProc !== idProc) });
    };

    const text = 'Вы действительно хотите отменить процедуру?'

    const columns = [
        {
            title: 'Процедура',
            dataIndex: 'nameProc',
            key: 'nameProc',
            align: 'center',
            width: 200,
        }, {
            title: 'Дата',
            dataIndex: 'dateProc',
            key: 'dateProc',
            align: 'center',
            width: 120,
        }, {
            title: 'Рекомендация',
            dataIndex: 'recommendation',
            key: 'recommendation',
            align: 'center',
            width: 300,
        }, {
            title: 'Дейтсвие',
            dataIndex: '',
            key: 'x',
            fixed: 'right',
            align: 'center',
            width: 120,
            render: (data) => (
                <Popconfirm
                    placement="topLeft"
                    title={text}
                    onConfirm={() => {
                        deleteProcedure(data.key);
                    }}
                    okText="Да" cancelText="Нет">
                    <CloseSquareOutlined style={{ fontSize: '30px' }} />
                </Popconfirm>
            ),
        }];

    const columnsMobile = [
        {
            title: 'Процедура',
            dataIndex: 'nameProc',
            key: 'nameProc',
            align: 'center',
            width: 200,
        }, {
            title: 'Дата',
            dataIndex: 'dateProc',
            key: 'dateProc',
            align: 'center',
            width: 120,
        }, {
            title: 'Дейтсвие',
            dataIndex: '',
            key: 'x',
            fixed: 'right',
            align: 'center',
            width: 120,
            render: (data) => (
                <Popconfirm
                    placement="topLeft"
                    title={text}
                    onConfirm={() => {
                        deleteProcedure(data.key);
                    }}
                    okText="Да" cancelText="Нет">
                    <CloseSquareOutlined style={{ fontSize: '30px' }} />
                </Popconfirm>
            ),
        }];

    const isMobile = window.innerWidth < 640;

    return (
        <div className="PetVet">
            <div className="vet-block">
                <h2>Ветеринарные процедуры</h2>
                <div className="vet-row">
                    <label htmlFor="procedure">Выберите процедуру:     </label>
                    <select id="procedure" ref={procedureRef} required>
                        <option value="Вакцинация против бешенства">Вакцинация против бешенства</option>
                        <option value="Комбинированная вакцинация">Комбинированная вакцинация</option>
                        <option value="Обработка от эндопаразитов">Обработка от эндопаразитов</option>
                        <option value="Обработка от эктопаразитов">Обработка от эктопаразитов</option>
                        <option value="Ежегодный контроль здоровья">Ежегодный контроль здоровья</option>
                    </select>
                </div>
                <div className="vet-row">
                    <label htmlFor="latest-date">Последняя дата проведения процедуры:     </label>
                    <input type="date" ref={latestDateRef} id="latest-date" disabled={disLatestDate} required />
                </div>
                <div className="vet-row">
                    Вы можете воспользоваться
                    <button className="vet-date-btn" id='latest-date-btn' onClick={setDateMode}>  <u>встроенным подсчетом даты</u></button>
                    <br />или
                </div>
                <div className="vet-row">
                    <button className="vet-date-btn" id="set-date-btn" onClick={setDateMode}><u>установить дату вручную:</u>     </button>
                    <input type="date" ref={setDateRef} id="set-date" disabled={disSetDate} required />
                </div>
                <button className="vet-save-btn" onClick={setProcedureReminder}>Установить напоминание</button>

                <Table
                    className='VetTable'
                    columns={(isMobile) ? columnsMobile : columns}
                    dataSource={
                        data?.map((el) => {
                            return {
                                key: el.idProc,
                                nameProc: el.nameProc,
                                dateProc: el.dateProc,
                                recommendation: showRecomendation(el.nameProc),
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
            </div>
        </div>
    );
};

export default React.memo(PetVet);