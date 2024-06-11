
export function Profile(){
    const datas = [
        {
            title: "姓名（Name）",
            descriptions: [
                "孫勤昱（Chin-Yu Sun）"
            ]
        },
        {
            title: "職稱（Position）",
            descriptions: [
                "國立臺北科技大學 資訊工程系-助理教授（Assistant Professor）",
                "國立臺北科技大學 計算機與網路中心-網路組組長（Chief Officer, Network Operation Section of Computer & Network Center）"
            ]
        },
        {
            title: "學歷（Degree）",
            descriptions: [
                "國立清華大學 資訊工程學系博士（Ph. D., National Tsing Hua University, Taiwan）"
            ]
        },
        {
            title: "專長（Expertise）",
            descriptions: [
                "網路安全 – 攻防技術（Network Security and hacking techniques）",
                "密碼學與其相關應用（Cryptography and its applications）",
                "資訊安全（Information Security）",
                "硬體安全（Hardware Security）",
                "量子密碼學（Quantum Cryptography）"
            ]
        },
        {
            title: "辦公室（Office）",
            descriptions: [
                "宏裕科研大樓 1626室 (Hong-Yue Tech. Research Building 1626)"
            ]
        },
        {
            title: "聯繫信箱（Email）",
            descriptions: [
                "cysun@ntut.edu.tw"
            ]
        },
        {
            title: "聯絡電話（Phone）",
            descriptions: [
                "+886-2-2771-2171 #4245（研究室）",
                "+886-2-2771-2171 #3231（網路組）"
            ]
        },
        {
            title: "實驗室（Lab）",
            descriptions: [
                "資訊安全實驗室 (Information Security Lab.)"
            ]
        }
    ]
    return (
        <>
            <h4 className="text-center fw-bold">簡介</h4>
            <table className="table-bordered">
                {datas.map(data => {
                    return (
                        <tr>
                            <td className="w-50 border border-1 p-3">
                                <p>{data.title}</p>
                            </td>
                            <td className="w-100 border border-1 p-3">
                                {data.descriptions.map(description => {
                                    return <p>{description}</p>
                                })}
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}