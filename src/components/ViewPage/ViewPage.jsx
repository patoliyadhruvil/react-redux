import { Container, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deletestu, singleStu } from '../../container/Services/Action/Student.action';
import { useNavigate } from 'react-router';


const ViewPage = () => {

    const { students } = useSelector((state) => state.studentReducer);
    console.log("students" , students);   

    const dispatch = useDispatch();
    const navigate = useNavigate();

const handlEdit = (id) =>{

    dispatch(singleStu(id));
    navigate("/edit");

}

const handlDelete = (id) =>{

    dispatch(deletestu(id))

}
    
    return (
        <Container className="mt-3">
            <h2>Student List</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Mobile Number</th>
                        <th>Course</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((stu, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>
                                {
                                    `${stu.fname} ${stu.lname}`
                                }
                            </td>
                            <td>{stu.Email}</td>
                            <td>{stu.Password}</td>
                            <td>{stu.number}</td>
                            <td>{stu.course}</td>
                            <td>
                                <button variant="primary" onClick={() =>handlEdit(stu.id)}>
                                    Edit
                                </button>
                                |||||
                                <button variant="primary" onClick={() =>handlDelete(stu.id)}>
                                    Delete
                                </button>

                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ViewPage;
