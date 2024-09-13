import React from 'react';

import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';

function page() {
	const loggedIn = { firstName: 'Hossam', lastName: 'Sabry', email: 'hossam@sabry.com' };
	return (
		<section className='home'>
			<div className='home-content'>
				<header className='home-header'>
				<HeaderBox 
				type='greeting'
				title='Welcome, '
				user={loggedIn?.firstName || 'Guest'}
				subtext='Access and manage your account and transactions efficiently.'
				/>
				<TotalBalanceBox
					accounts={[]}
					totalBanks={1}
					totalCurrentBalance={1250.16}
				/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{currentBalance: 1250.16}, {currentBalance: 2260.18}]}
			/>
		</section>
	);
}

export default page;
