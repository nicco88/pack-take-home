<script lang="ts">
	import type { ButtonPropsI, ButtonVariantT } from "../models/button.models";

	const { children, variant = "primary", classList, ...rest }: ButtonPropsI = $props();
  const stylesByVariant: Record<ButtonVariantT, string> = {
    primary: "inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-3 rounded h-8 cursor-pointer",
    secondary: "", // TODO: add secondary button styles
  }
</script>

<button class="{classList} {stylesByVariant[variant]}" {...rest}>
	{@render children()}
</button>
