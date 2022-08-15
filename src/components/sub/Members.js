import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

function Members() {
	const initVal = {
		userid: '',
		email: '',
		pwd1: '',
		pwd2: '',
		gender: null,
		interests: null,
		edu: '',
	};
	const [Val, setVal] = useState(initVal);
	//인증 실패시 출력될 에러메시지 담을 state
	const [Err, setErr] = useState({});

	// 인증처리 함수
	const check = (value) => {
		const errs = {};

		//인증처리할 조건 정규표현식
		const eng = /[a-zA-Z]/;
		const num = /[0-9]/;
		const spc = /[~!@#$%^&*()_+\]]/;

		//userid 인증처리
		if (value.userid.length < 5) {
			errs.userid = '아이디를 5글자 이상 입력하세요';
		}

		//email 인증처리
		if (value.email.length < 8 || !/@/.test(value.email)) {
			errs.email = '이메일 주소는 8글자 이상 @를 포함하세요';
		}
		//password 인증처리
		if (
			value.pwd1.length < 6 ||
			!eng.test(value.pwd1) ||
			!num.text(value.pwd1) ||
			!spc.test(value.pwd1)
		) {
			errs.pwd1 =
				'비밀번호는 6글자 이상, 영문, 숫자, 특수문자를 모두 포함해주세요';
		}

		if (value.pwd1 !== value.pwd2) {
			errs.pwd2 = '비밀번호를 동일하게 입력해 주세요';
		}
		//gender 인증처리
		if (!value.gender) {
			errs.gender = '성별을 선택하세요';
		}

		//interests 인증처리
		if (!value.interests) {
			errs.interests = '관심사를 하나 이상 선택하세요';
		}
		//edu 인증처리
		if (value.edu === '') {
			errs.edu = '최종학력을 선택하세요';
		}
		return errs;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		setErr(check(Val));
		console.log(Err);
	};

	const handleRadio = (e) => {
		const { name } = e.target;
		const isCheck = e.target.checked;
		setVal({ ...Val, [name]: isCheck });
	};

	const handleChange = (e) => {
		console.log(Val);
		const { name, value } = e.target;
		//name = 'userid'
		//객체에서 키값을 변수로 지정이 안됨 (es5)
		//객체에세 키값을 변수로 치환하고자 할때는 키에 들어갈 변수를 대괄호로 감싸줌 (es6)
		setVal({ ...Val, [name]: value });
	};

	const handleCheck = (e) => {
		let isCheck = false;
		const { name } = e.target;
		const inputs = e.target.parentElement.querySelectorAll('input');

		inputs.forEach((el) => {
			if (el.checked) isCheck = true;
		});
		setVal({ ...Val, [name]: isCheck });
	};

	//select 전용 함수
	const handleSelect = (e) => {
		const { name, value } = e.target;
		setVal({ ...Val, [name]: value });
	};

	useEffect(() => {
		console.log(Err);
	}, [Err]);

	return (
		<Layout name={'Members'}>
			<form onSubmit={handleSubmit}>
				<fieldset>
					<legend>회원가입 폼 양식</legend>
					<table border='1' wid='600'>
						<caption>회원가입 정보 입력</caption>
						<tbody>
							{/* userid */}
							<tr>
								<th scope='row'>
									<label htmlFor='userid'>USER ID</label>
								</th>
								<td>
									<input
										type='text'
										placeholder='아이디를 입력하세요'
										name='userid'
										id='userid'
										value={Val.userid}
										onChange={handleChange}
									/>
									<span className='err'>{Err.userid}</span>
								</td>
							</tr>
							{/* password */}
							<tr>
								<th scope='row'>
									<label htmlFor='pwd1'>PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										placeholder='비밀번호를 입력하세요'
										name='pwd1'
										id='pwd1'
										value={Val.pwd1}
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd1}</span>
								</td>
							</tr>
							<tr>
								<th scope='row'>
									<label htmlFor='pwd2'>RE-PASSWORD</label>
								</th>
								<td>
									<input
										type='password'
										placeholder='비밀번호를 재입력하세요'
										name='pwd2'
										id='pwd2'
										value={Val.pwd2}
										onChange={handleChange}
									/>
									<span className='err'>{Err.pwd2}</span>
								</td>
							</tr>
							{/* email */}
							<tr>
								<th scope='row'>
									<label htmlFor='email'>E-MAIL</label>
								</th>
								<td>
									<input
										type='text'
										placeholder='이메일을 입력하세요'
										name='email'
										id='email'
										value={Val.email}
										onChange={handleChange}
									/>
									<span className='err'>{Err.email}</span>
								</td>
							</tr>
							{/* gender */}
							<tr>
								<th scope='row'>GENDER</th>
								<td>
									<label htmlFor='male'>MALE</label>
									<input
										type='radio'
										name='gender'
										id='male'
										onChange={handleRadio}
									/>
									<label htmlFor='female'>FEMALE</label>
									<input
										type='radio'
										name='gender'
										id='female'
										onChange={handleRadio}
									/>
									<span className='err'>{Err.gender}</span>
								</td>
							</tr>
							{/* interests */}
							<tr>
								<th scope='row'>INTERESTS</th>
								<td>
									<label htmlFor='sports'>Sports</label>
									<input
										type='checkbox'
										name='interests'
										id='sports'
										onChange={handleCheck}
									/>
									<label htmlFor='music'>Music</label>
									<input
										type='checkbox'
										name='interests'
										id='music'
										onChange={handleCheck}
									/>
									<label htmlFor='game'>Game</label>
									<input
										type='checkbox'
										name='interests'
										id='game'
										onChange={handleCheck}
									/>
									<span className='err'>{Err.interests}</span>
								</td>
							</tr>
							{/* edu */}
							<tr>
								<th scope='row'>
									<label htmlFor='edu'>EDUCATION</label>
								</th>
								<td>
									<select name='edu' id='edu'>
										<option value=''>최종 학력을 선택하세요</option>
										<option value='elementary-school'>초등학교 졸업</option>
										<option value='middle-school'>중학교 졸업</option>
										<option value='high-school'>고등학교 졸업</option>
										<option value='college'>대학교 졸업</option>
									</select>
									<span className='err'>{Err.edu}</span>
								</td>
							</tr>

							{/* btnset */}
							<tr>
								<th colspan='2'>
									<input type='reset' value='cancel' />
									<input type='submit' value='submit' />
								</th>
							</tr>
						</tbody>
					</table>
				</fieldset>
			</form>
		</Layout>
	);
}

export default Members;
