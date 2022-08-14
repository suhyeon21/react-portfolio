import Layout from '../common/Layout';
import { useState } from 'react';
function Members() {
	const initVal = {
		userid: '',
	};
	const [Val, setVal] = useState(initVal);

	return (
		<Layout name={'Members'}>
			<form>
				<fieldset>
					<legend>회원가입 폼 양식</legend>
					<table border='1' wid='600'>
						<caption>회원가입 정보 입력</caption>
						<tbody>
							<tr>
								<th>
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										placeholder='아이디를 입력하세요'
										name='userid'
										id='userid'
										value={Val.userid}
										onChange={(e) => {
											setVal({ ...Val, userid: e.target.value });
										}}
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Members;
