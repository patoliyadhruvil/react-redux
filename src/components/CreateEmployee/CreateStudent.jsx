import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import studentaction from "../../container/Services/Action/Student.action";
import { useNavigate } from "react-router";


const Createformdata = () => {

    const [formdata, setformdata] = useState({
        fname: '',
        lname: '',
        Email: '',
        Password: '',
        number: '',
        course: '',

    })
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleChange = (e) => {   

        const name = e.target.name;
        const value = e.target.value;

        setformdata({...formdata , [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let uid = Math.floor(Math.random() * 1000)
        console.log("uid" , uid);
        let newStudent = { ...formdata, id : uid }
        console.log("NEw" , newStudent);

        dispatch(studentaction(newStudent));

        setformdata({
            fname: '',
            lname: '',
            Email: '',
            Password: '',
            number: '',
            course: '',
    
        })
        navigate("/view");
        
    }

    return (
        <>

            <section className="create">
                <div className="container">
                    <Form className="pt-3" onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter The First  Name" name="fname" value={formdata.fname} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter the last name" name="lname" value={formdata.lname} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter The Email" name="Email" value={formdata.Email} onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter The Password" name="Password" value={formdata.Password} onChange={handleChange} />
                            </Form.Group>

                            <Form.Group as={Col} >
                                <Form.Label>Mobile Number</Form.Label>
                                <Form.Control type="number" placeholder="Enter The Mobile Number" name="number" value={formdata.number} onChange={handleChange} />
                            </Form.Group>
                        </Row>

                        <Row>

                            <Form.Group as={Col}>
                                <Form.Label>Course</Form.Label>
                                <Form.Control type="text" placeholder="Enter the course" className="mb-3" name="course" value={formdata.course} onChange={handleChange} />
                            </Form.Group>
                        </Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>

                </div>
            </section>

        </>
    )

}
export default Createformdata;