import GaugeChart from "react-gauge-chart"
import useAppState from "../../../../store/appState/useAppState"
import React, {HTMLAttributes, useState, useEffect, useMemo} from "react"
const styles = {
    dial: {
      display: "inline-block",
      width: `150px`,
      height: `auto`,
      color: "#3e4a35",
      border: "none",
      padding: "2px"
    },
    title: {
      fontSize: "1em",
      color: "#000"
    }
}

const AccelDial = () => {
    const {
        isProxyStart
    } = useAppState()

    const [proxyUploadSpeed, setProxyUploadSpeed] =  useState(0)

    useEffect(() => {
        let time = false
        const ramdomSpeed = () => {
            if (!active||!isProxyStart|| time) { return }
            time = true
            setTimeout(() => {
                time = false
                const ramNum = Math.random()
                setProxyUploadSpeed (ramNum)
            }, 1000)
        }
        let active = true
        ramdomSpeed()
        return () => { active = false }
    }, [isProxyStart, proxyUploadSpeed])
    return (
        <div style={styles.dial}>
            <GaugeChart
                animDelay={0}
                nrOfLevels={3}
                arcsLength={[0.25, 0.5, 0.25]}
                colors={["#d8e7cb", "#bdcbb0", "#a1b095"]}
                arcPadding={0.02}
                percent={proxyUploadSpeed}
                textColor={"#3e4a35"}
                hideText={true}
                needleColor={"#6b9999"}
                formatTextValue={(value) => value}
            />
          
        </div>
    )
}

export default AccelDial
