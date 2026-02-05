<script>
	import CadenzaLogo from '$lib/components/cadenza_logo.svelte';
	import DashboardLogo from '$lib/components/dashboard_logo.svelte';

	import LogoutButton from '$lib/components/logout_button.svelte';
	import UserInfo from '$lib/components/user_info.svelte';
</script>

<!--Broke header into components to separately add functionality later-->
<header
	class="flex h-[87.21px] items-center justify-between bg-white shadow-[0_0px_4px_4px_rgba(0,0,0,0.25)]"
>
	<CadenzaLogo />
	<DashboardLogo />
	<div class="mr-[66px] flex items-center justify-self-end">
		<UserInfo />
		<LogoutButton />
	</div>
</header>
