#! /bin/sh
#INICIAR JSONServer NA PORTA 3000
echo "----------INSTALL--------"
echo ""
echo "START JSON-SERVER"
json-server /www/app/db2.json -p 3000 --host 0.0.0.0 & # your first application
echo ""
echo "START HTTP-SERVER"
P1=$!
http-server -p 8100 & # your second application
P2=$!
echo ""
echo "WAIT....."
wait $P1 $P2
