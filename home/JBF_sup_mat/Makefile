default: receive


help:
	@echo "Use one of these rules:\n\
	copy_local_script : copy on server the script from script system that is executed when call of make distant\n\
	send : copy on server library and code matlab\n\
	connect : connect to server faster\n\
	receive : retreive outputs of the algorithm\n\
	local : run the code on local machine\n\
	distant : send connect and lauch code\n\
	better : does all the above on the epfl lib server"


receive_asus:
	# CP ${better}code/Outex_TC_00010/features/ ~/code/Outex_TC_00010/features_from_server_better/
	CP ${serveur_asus}these/jbfnet/logs/ ~/JBF/logs_serveur_asus/

distant_asus:
	CP --exclude-from=ExclusionRsync ~/JBF/ ${serveur_asus}these/jbfnet
	@echo "Files sent."
	ssh -C -x thibault@195.221.193.161 "tmux new-window '/home/thibault/these/jbfnet/scripts/train_NYU.sh'"
	@echo "Connection closed."

distant:
	make distant_asus

receive:
	make receive_asus