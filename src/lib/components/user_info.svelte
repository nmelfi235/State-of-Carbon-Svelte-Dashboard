<script>
	import Fa from 'svelte-fa';
	import { faUser } from '@fortawesome/free-regular-svg-icons';

	let client_username = 'ClientUser';
</script>

<div class="flex items-center gap-[10px] justify-self-end px-[20px]">
	<Fa icon={faUser} scale={1} color="#0f3052" />
	<p>{client_username}</p>
</div>
