import { render, fireEvent } from "@testing-library/react"
import TodoList from "./TodoList"

test("renders the correct content version2", () => {
    const { getByText, getByLabelText } = render(<TodoList />)

    getByText("TODOs")
    getByLabelText("What needs to be done?")
    getByText("Add #1")
})

test("allow user add data", () => {
    const { getByText, getByLabelText } = render(<TodoList />)

    //simulation การกดของ user
    const input = getByLabelText("What needs to be done?")
    fireEvent.change(input , {target : {value : "TRL Presentation 5 slide"}})
    fireEvent.click(getByText("Add #1"))

    //แสดงผลลัพธ์จากการกด
    getByText("TRL Presentation 5 slide")
    getByText("Add #2")
})
