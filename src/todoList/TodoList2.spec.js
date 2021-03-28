import { render, screen } from "@testing-library/react"
import * as ReactDOM from "react-dom"
import * as react from "react"
import TodoList from "./TodoList"

test("renders the correct content", () => {
    const root = document.createElement("div")
    ReactDOM.render(<TodoList />, root)

    expect(root.querySelector("h1").textContent).toBe("TODOs")
    expect(root.querySelector("label").textContent).toBe("What needs to be done?")
    expect(root.querySelector("button").textContent).toBe("Add #1")
})
