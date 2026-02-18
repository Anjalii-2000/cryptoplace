import React, { useState, useEffect } from 'react'
import Chart from 'react-google-charts'

const LiveChart = ({ historicalData }) => {

    const [data, setData] = useState([["Date", "Prices"]])

    useEffect(() => {
        window.scrollTo(0, 0);
        let dataCopy = [["Date", "Prices"]];
        if (historicalData.prices) {
            historicalData.prices.map((item) => {
                dataCopy.push([
                  `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
                  item[1]
                ])
            })
            setData(dataCopy);
        }
    }, [historicalData])

    return (
        <Chart
            chartType='LineChart'
            data={data}
            width="100%"
            height="100%"
            legendToggle
        />
    )
}

export default LiveChart
