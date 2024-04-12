import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import {getTransationsRequest} from '../../actions/actionCreator';
import styles from './TransactionPage.module.css';

const TransactionPage = (props) => {

    useEffect(() => {
        props.getTransationsRequest();    
    }, []);

    console.log(props.transactions)

    return (
        <>
        <Header />
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Transaction Id</td>
                        <td>Operation type</td>
                        <td>Sum</td>
                        <td>Relative Contest</td>
                        <td>Date</td>
                    </tr>
                </thead>
                {props.transactions.map(trans => {
                    return (
                        <tr>
                            <td>{trans.id}</td>
                            <td>{trans.type}</td>
                            <td>{trans.amount}</td>
                            <td>{trans.contestId}</td>
                            <td>{trans.createdAt}</td>
                        </tr>
                    )
                })}
            </table>
        <Footer />  
        </>
    );
}

const mapState = ({transactions}) => ({transactions})

const mapDispatch = {
    getTransationsRequest
}

export default connect(mapState, mapDispatch)(TransactionPage);

/*

amount: 100
contestId: null
createdAt: "2024-04-12T06:56:13.363Z"
id: 1
type: "expence"
userId: 1

*/