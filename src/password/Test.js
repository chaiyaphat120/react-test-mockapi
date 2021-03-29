import React from "react"
import { useState } from "react"
import styled from "styled-components"
const T = {}
T.Header = styled.h1`
    color: "#838383";
`
T.Content = styled.h3`
    color: ${(props) =>
        props.isLength === 1
            ? "#5BD2A7"
            : props.isLength === 3
            ? "#ff8989"
            : "#8e8e8e"};
`
T.Content2 = styled.h3`
    color: ${(props) =>
        props.isUpperCase === 1
            ? "#5BD2A7"
            : props.isUpperCase === 3
            ? "#ff8989"
            : "#8e8e8e"};
`
T.Content3 = styled.h3`
    color: ${(props) =>
        props.isNumber === 1
            ? "#5BD2A7"
            : props.isNumber === 3
            ? "#ff8989"
            : "#8e8e8e"};
`
T.Content4 = styled.h3`
    color: ${(props) =>
        props.isNoSpace === 1
            ? "#5BD2A7"
            : props.isNoSpace === 3
            ? "#ff8989"
            : "#8e8e8e"};
`

function Test() {
    const [password, setPassword] = useState("")
    const [isLength, setIsLength] = useState(2)
    const [isUpperCase, setIsUpperCase] = useState(2)
    const [isNumber, setIsNumber] = useState(2)
    const [isNoSpace, setIsNoSpace] = useState(2)
    const typingPassword = (e) => {
        setPassword(e)
        if (e.length >= 8) {
            setIsLength(1)
        }
        if (e.length <= 0) {
            setIsLength(2)
        }
        if (e.length >= 1 && e.length < 8) {
            setIsLength(3)
        }
        //check 1 upper case
        const rex = /^(?=(?:.*?[A-Z]){1})/ //แก้เลขตรงนี้จะใส่กี่ตัวก็ได้
        const test = rex.test(e)
        if (test) {
            setIsUpperCase(1)
        }
        if (e.length > 0 && !test) {
            setIsUpperCase(3)
        }
        if (e.length <= 0) {
            setIsUpperCase(2)
        }

        const rexNumber = /^(?=(?:.*?[0-9]){1})/
        const testNumb = rexNumber.test(e)
        if (testNumb) {
            setIsNumber(1)
        }
        if (e.length > 0 && !testNumb) {
            setIsNumber(3)
        }
        if (e.length <= 0) {
            setIsNumber(2)
        }

        const rexNotSpaceBar = /^\S*$/
        const testSpec = rexNotSpaceBar.test(e)
        if (testSpec) {
            setIsNoSpace(1)
        }
        if (e.length > 0 && !testSpec) {
            setIsNoSpace(3)
        }
        if (e.length <= 0) {
            setIsNoSpace(2)
        }
    }
    return (
        <div>
            <T.Header>Password</T.Header>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => typingPassword(e.target.value)}
            ></input>

            <div>
                <T.Content isLength={isLength}>8-16 Characters</T.Content>
                <T.Content2 isUpperCase={isUpperCase}>
                    At least 1 capital latter
                </T.Content2>
                <T.Content3 isNumber={isNumber}>At least 1 number</T.Content3>
                <T.Content4 isNoSpace={isNoSpace}>No space</T.Content4>
            </div>
        </div>
    )
}

export default Test
