default: distant


distant_asus:
	CP --exclude-from=ExclusionRsync ~/projects/website/ ${imagine}www

distant:
	make distant_asus
