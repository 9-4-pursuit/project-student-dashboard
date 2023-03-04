import React from "react";
import { NavLink } from "react-router-dom";

export default function ClassList(props) {

    return (
    <section className="class-by-semester-section">
      <h2 className="chooseClassH2"> Choose Class by Semester </h2>
      <br></br>
      <nav className="classList-nav">
            <NavLink className="nav-class" name="All Students" onClick={(event) => {props.updateShowcase(event)}}> All Students </NavLink>
            <br></br>
            <NavLink className="nav-class" name="Winter2026" onClick={(event) => {props.updateShowcase(event)}}> Winter 2026 </NavLink>
            <br></br>
            <NavLink className="nav-class" name="Fall2026" onClick={(event) => {props.updateShowcase(event)}}> Fall 2026 </NavLink>
            <br></br>
            <NavLink className="nav-class" name="Summer2026" onClick={(event) => {props.updateShowcase(event)}}> Summer 2026 </NavLink>
            <br></br>
            <NavLink className="nav-class" name="Spring2026" onClick={(event) => {props.updateShowcase(event)}}> Spring 2026 </NavLink>
            <br></br>
            <NavLink className="nav-class" name="Winter2025" onClick={(event) => {props.updateShowcase(event)}}> Winter 2025 </NavLink>
            <br></br>
            <NavLink className="nav-class" name="Fall2025" onClick={(event) => {props.updateShowcase(event)}}> Fall 2025 </NavLink>
            <br></br>
            <NavLink className="nav-class" name="Summer2025" onClick={(event) => {props.updateShowcase(event)}}> Summer 2025 </NavLink>
            <br></br>
            <NavLink className="nav-class spring25" name="Spring2025" onClick={(event) => {props.updateShowcase(event)}}> Spring 2025 </NavLink>
        </nav>
      <br></br>
    </section>
    )
}