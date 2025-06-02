export default function Cart() {
    return (
        <>
            {/* 灰底色 */}
            <div className="bg-light p-3"> {/* padding */}
                <table className="table align-middle">
                    <tbody>
                        {/* 一列5欄 */}
                        <tr>
                            <td><a href="#">x</a></td>
                            <td>
                                <img src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80"
                                    className="table-img"
                                    alt="..." />
                            </td>
                            <td>
                                全蔬食健康餐
                                <br />
                                <small className="text-muted">NT$ 210</small>
                            </td>
                            <td>
                                <select name="" id="" className="form-select"></select>
                            </td>
                            <td className="text-end">NT$ 210</td>
                        </tr>
                        <tr>
                            <td><a href="#">x</a></td>
                            <td>
                                <img src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80"
                                    className="table-img"
                                    alt="..." />
                            </td>
                            <td>
                                綜合特調果汁
                                <br />
                                <small className="text-muted">NT$ 300</small>
                            </td>
                            <td>
                                <select name="" id="" className="form-select"></select>
                            </td>
                            <td className="text-end">NT$ 600</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="text-end" colSpan={5}>總金額 NT$ 810</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </>
    )
}