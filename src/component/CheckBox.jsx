import React from 'react';
// 리액트-아이콘즈 : 리액트에서 사용할 수있는 오픈소스 아이콘들을 모아놓음
import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
// 모듈 css 사용해보기
// import styles from './CheckBox.module.css';
// SCSS로 변경하기
import styles from './CheckBox.module.scss';

// classnames와 같이 사용해보기
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const CheckBox = ({ checked, children, ...rest }) => {
	// console.log(styles);

	return (
		<div className={cx('checkbox', 'blalala')}>
			<label>
				<input type="checkbox" checked={checked} {...rest} />
				<div className={styles.icon}>
					{checked ? (
						<MdCheckBox className={styles.checked} />
					) : (
						<MdCheckBoxOutlineBlank />
					)}
				</div>
			</label>
			<span>{children}</span>
		</div>
	);
};

export default CheckBox;
