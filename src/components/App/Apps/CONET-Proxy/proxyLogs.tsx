
import type {nodes_info} from './SaasNodes'
import React, {HTMLAttributes, useState, useEffect} from 'react'
import {logger} from '../../logger'
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui'

const ProxyLogs = (node: nodes_info, logs: any[]) => {
    return (
        <Terminal
            name={node.ip_addr}
        >
        </Terminal>
    )
}


11
export default ProxyLogs