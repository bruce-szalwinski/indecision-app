import React from 'react';
import { AddOption } from './AddOption';
import { Action } from './Action';
import { Header } from './Header';
import { Options } from './Options';
import { OptionModal } from './OptionModal';

export class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((p) => ({
            options: p.options.filter((option) => option !== optionToRemove)
        }));
    }

    handleClearSelectedOption = () => {
        this.setState(() => ({
            selectedOption: undefined
        }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value';

        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'this option already exists';
        }

        // can't manipulate the previous state, must instead return an new version
        this.setState((p) => ({
            options: p.options.concat(option)
        }));
    }

    handlePickOption = () => {
        const n = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[n]
        this.setState(() => ({
            selectedOption: option
        }))

        console.log(this.state.options[n]);
    }

    componentDidMount = () => {
        try {
            const json = localStorage.getItem("options");
            const options = JSON.parse(json);
            if (options) {
                this.setState((p) => ({ options: options }));
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        console.log("componentDidUpdate");
        if (prevState.options.length != this.state.options.length) {
            localStorage.setItem("options", JSON.stringify(this.state.options));
        }
    }

    componentWillUnmount = () => {
        console.log("conmopnentWillUnmount");
    }

    render() {

        const subtitle = "Put your life in the hands of a computer";

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePickOption={this.handlePickOption} />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                            handleRenderOptions={this.handleRenderOptions} />
                        <AddOption
                            handleAddOption={this.handleAddOption} />
                    </div>

                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
