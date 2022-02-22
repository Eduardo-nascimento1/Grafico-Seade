import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

const Grafico = () => {
    const [sao, setSao] = useState({});

    const grafico = () => {
        setSao({
            labels:['monday','saturday','segunda','quarta'],
            datasets:[
                {
                    label:'Grafico da população de são paulo',
                    data:[20,75,80,60],
                    backgroundColor:[
                        'rgba(75,192,192,0.6)'
                    ],
                    borderWidth:4


                }
            ]

        })
    }
    useEffect(()=> {
        grafico()
    },[])

    return (
        <div>
            <Bar/>


        </div>
    )


}

export default Grafico;