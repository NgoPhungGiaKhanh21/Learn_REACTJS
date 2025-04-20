import './App.css'
import Header from "./components/Header"
import Layout from "./components/Layout"
function App() {
//  const randomString = "hello world!";

// yêu cầu render ra list các sinh viên
  const Students = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    age: 14 + Math.floor(Math.random() * 3),
    name: `Văn ${String.fromCharCode(65 + i)}`,
    gender: Math.random() < 0.5 ? "male" : "female",
    score: Math.floor(Math.random() * 51) + 50,
  }));

// yêu cầu render ra các sinh viên có giới tính là nữ và có điểm số chẵn
  const femaleEvenMark = Students.filter(
    (student) => student.gender === "female" && student.score % 2 === 0
  ); 
  return( 
//    <>
//      <Header name={randomString}/>
//      <div></div>
//    </>
    <Layout>
      <h2>Danh sách sinh viên</h2>
      {Students.map((student, idx) => (
        <div key={idx}>
          <div>======== Học sinh {idx +1} ========</div>
          <div>ID:{student.id}</div>
          <div>Tuổi:{student.age}</div>
          <div>Họ và têntên:{student.name}</div>
        </div>
      ))}
      <h2>Danh sách sinh viên nữ có điểm số chẵn</h2>
      {femaleEvenMark.length > 0 ? (
        femaleEvenMark.map((student, idx) => (
          <div key={student.id}>
            <div>======== Học sinh {idx + 1} ========</div>
            <div>Tuổi:{student.age}</div>
            <div>Họ và tên:{student.name}</div>
            <div>Giới tính:{student.gender}</div>
            <div>Điểm số:{student.score}</div>
          </div>
        ))
      ) : (
        <p>Không có sinh viên nữ nào có điểm số chẵn</p>
      )}
    </Layout>
  );
}

export default App;
