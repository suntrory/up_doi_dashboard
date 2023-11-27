
export async function fetchReport() {
    //   const [user, setUser] = useState([]);
    const response = await fetch('http://localhost:3333/report', {
        method: 'GET',
            headers: {
                "content-type": "application/json",
                "authorization": "b809vCwvtawRbsG0BmP1tWgnlXQypSKf",
            },
     });
    return response.json();
}
export async function MyComponent() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('http://localhost:3333/getCount');
    //         const data = await response.json();
    //         setData(data);

    //         console.log(data)
    //     }

    // });
    // const albumsData = fetchUser()

    // const [artist] = await Promise.all([albumsData])
    // console.log(artist);
    const artist = await fetchReport().finally();

    
    return (
        <>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th style={{width: 400}}>รายการ</th>
                        <th>จำนวน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>นักศึกษาชั้นปีที่ 1 ทั้งหมดเข้าประเพณี</td>
                        <td>{artist.first_year}</td>
                    </tr>
                    <tr>
                        <td>นักศึกษาที่ต้องตรวจสุขภาพ</td>
                        <td>{artist.self_dis_1}</td>
                    </tr>
                    <tr>
                        <td>นักศึกษาที่ไม่ต้องตรวจสุขภาพ</td>
                        <td>{artist.self_dis_0}</td>
                    </tr>
                    <tr>
                        <td>นักศึกษาชั้นปี อื่น ๆ ที่เข้าร่วมประเพณี</td>
                        <td>{artist.first_year_no}</td>
                    </tr>
                    <tr>
                        <td>นักศึกษาที่ไม่เข้าร่วมประเพณี</td>
                        <td>{artist.not_come}</td>
                    </tr>
                </tbody>
            </table>

            <h2 style={{marginTop: 40}}>จำนวนนักศึกษาที่เข้าร่วมโครงการ เฉพาะ นักศึกษาชั้นปีที่ 1</h2>
            <table className="table-auto">
                <thead>
                    <tr>
                        <th style={{width: 400}}>รายการ</th>
                        <th>จำนวน</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ตรวจสุขภาพ</td>
                        <td>{artist.first_self_dis_1}</td>
                    </tr>
                    <tr>
                        <td>ไม่ตรวจสุขภาพ</td>
                        <td>{artist.first_self_dis_0}</td>
                    </tr>
                    <tr>
                        <td>ทั้งหมด</td>
                        <td>{artist.first_year}</td>
                    </tr>
                    
                </tbody>
            </table>
        </>
    );
}