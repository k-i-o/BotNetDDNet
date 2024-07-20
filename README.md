### Educational purpose

## Usage

#### Run from the same ip

1. `npm start --numClients=5 --baseName=Player --ip=127.0.0.1 --port=8303` 


#### Run from different ip (linux)

1. `sudo apt-get install proxychains`
2. Change config located in '/etc/proxychains.conf' or '/usr/local/etc/proxychains.conf' to:
```
dynamic_chain
proxy_dns
remote_dns_subnet 224
tcp_read_time_out 15000
tcp_connect_time_out 8000

[ProxyList]
# add your proxies here
# format: type host port [user pass]
socks5 127.0.0.1 9050
socks5 127.0.0.1 9051
socks5 127.0.0.1 9052
```
3. `proxychains npm start --numClients=5 --baseName=Player --ip=127.0.0.1 --port=8303` 