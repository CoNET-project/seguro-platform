import Avatar from '@mui/material/Avatar'
import AvatarGroup from "@mui/material/AvatarGroup"
import Stack from '@mui/material/Stack'
import useAppState from "../../../../../store/appState/useAppState"
import {getCONETBalance} from '../../../../../API/index'
import React, {HTMLAttributes, useState, useEffect} from "react"
import {getWorkerService} from '../../../../../services/workerService/workerService'
import {logger} from '../../../logger'

import AccountCircleIcon from '@mui/icons-material/AccountCircle'
const Account = () => {
    const [CONET_balance, setCONET_balance] = useState(0)
    const [walletAddress, setWalletAddress] = useState('')
    const {data} = getWorkerService()
    const currentProfile = data.profiles.filter((n:any)=> n.isPrimary)[0]
    const keyID = currentProfile.keyID
    currentProfile.profileImg
    const shortID = keyID.substring(0,6) + '...' + keyID.substring(keyID.length-4)
    const {
        setShowMiner,
        pendingRewards,
    } = useAppState()


    useEffect(() => {
        
        const fetchData = async () => {

            const [status, data] = await getCONETBalance()
            if (status !== 'SUCCESS' || !data) {
                return logger ('Miner Error', 'useEffect fetchData getCONETBalance had no SUCCESS')
            }

            logger (`getCONETBalance SUCCESS`, data)
            setWalletAddress(data[0])
            setCONET_balance(data[1])

        }
      
        // call the function
        fetchData()
            // make sure to catch any error
            .catch(console.error)
    }, [])

    return (
        <Stack direction="row" spacing={2} justifyContent="flex-end" sx={{width: '100%', textAlign: 'right'}}>
            <AvatarGroup max={4}>
                <Avatar alt={shortID} sx={{ width: 56, height: 56 }}>
                    {
                        !currentProfile.profileImg &&
                        <AccountCircleIcon fontSize='large' color='success'/>
                    }
                </Avatar>
            </AvatarGroup>
            
        </Stack>
    )
}

export default Account

