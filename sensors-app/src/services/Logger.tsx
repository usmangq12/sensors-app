import React, { Component } from 'react';

interface LoggerState {
    hasError: boolean
    info: string
}

interface LoggerProps {
    
}

export class Logger extends Component<LoggerProps, LoggerState> {
    constructor(props: LoggerProps){
        super(props);
        this.state = { hasError: false, info: ""}
    }

    static geDerivedStateFromError(error: Error){
        console.log("Dtecting");
        return {hasError: true};
    }

    componentDidCatch(err: Error, info: React.ErrorInfo){
        console.log("Error", err, "Info", info);
    }

    render() {
        if(this.state.hasError) {
            return <div>Error Screen</div>
        }
        return this.props.children;
    }

}

export default Logger;