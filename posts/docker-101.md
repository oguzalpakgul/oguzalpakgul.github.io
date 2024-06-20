---
title: "Docker 101"
short_description: "Docker başlangıç komutları"
date: "2024-06-20T00:00:00.000Z"
---

# Docker Nedir?

Docker, uygulamaların fiziksel olarak ayrılması yerine, aynı işletim sistemi içerisinde containerlar oluşturup izole şekilde çalıştırılmasını sağlar. Bu sayede uygulamalar birbirinden bağımsız ve güvenli bir şekilde çalıştırılabilir. Docker, sunucuların daha verimli kullanılmasını sağlar ve geliştiricilerin uygulamalarını her ortamda aynı şekilde çalıştırabilmesine olanak tanır.

## Docker'ın Avantajları

- **Taşınabilirlik**: Docker containerları herhangi bir ortamda, herhangi bir altyapıda çalıştırılabilir.
- **Verimlilik**: Containerlar, geleneksel sanal makinelerden daha az kaynak kullanır.
- **Hız**: Containerların başlatılması ve durdurulması çok hızlıdır.
- **Tutarlılık**: Geliştirme, test ve üretim ortamlarında aynı container kullanılabilir.

# Docker Nasıl Yüklenir?

Docker'ı yüklemek için aşağıdaki adımları izleyebilirsiniz:

1. **Kurulum**: Docker'ı Ubuntu işletim sistemine kurmak için resmi dökümantasyonu kullanabilirsiniz: [Docker Install Ubuntu](https://docs.docker.com/engine/install/ubuntu/)
2. **Sudo'suz Çalıştırma**: Docker'ı sudo komutu kullanmadan çalıştırmak için şu adımları izleyebilirsiniz: [Docker Linux Postinstall](https://docs.docker.com/engine/install/linux-postinstall/)

# Docker Nasıl Kullanılır?

Docker'ı kullanmaya başlamak için bazı temel komutlar şunlardır:

- Docker sürümünü görmek için:

```bash
docker version
```

- Docker hakkında genel bilgi almak için:

```bash
docker info
```

- Docker komutları hakkında ayrıntılı bilgi almak için:

```bash
docker run --help
```

- Docker'ın doğru kurulduğunu test etmek için:

```bash
docker run hello-world
```

# Container Yönetimi

- Sistemde çalışan containerları görmek için:

```bash
  docker ps
```

- Sistemdeki tüm (çalışan ve durdurulmuş) containerları görmek için:

```bash
docker ps -a
```

- Bir container'ı isim vererek çalıştırmak için:

```bash
docker run --name my-docker hello-world
```

- Oluşturulan container'ları silmek için container ID'sinin tamamını veya bir kısmını ya da container ismini kullanabilirsiniz:

```bash
docker rm my-docker
docker rm f71
```

- Oluşturulan container'ları başlatmak için:

```bash
docker start my-docker
docker start f71
```

- Container loglarını görmek için:

```bash
docker logs my-docker
```

- Container'ı arka planda çalıştırmak için:

```bash
docker run -d my-image
```

- Belirli bir komut ile container'ı çalıştırmak için:

```bash
docker run my-image my-command
```

# Container İçi İşlemler

- Çalışan bir container içerisinde yeni komutlar çalıştırmak için:

```bash
docker exec my-con my-command
```

- Çalışan bir container'ın konsoluna bağlanmak için:

```bash
docker exec -it my-con sh
```

# Detaylı Bilgi ve İzleme

- Container veya image hakkında ayrıntılı bilgi almak için:

```bash
docker container inspect my-con
docker image inspect hello-world
```

- Container içerisindeki çalışan süreçleri izlemek için:

```bash
docker top my-con
```

- Container kullanım istatistiklerini izlemek için:

```bash
docker stats my-con
```

# Environment Değişkenleri

- Container oluştururken environment değişkenleri belirlemek için:

```bash
docker run --env key1=val1 --env key2=val2 my-image
```

# Docker Volume

Docker volume, containerlar arasında veri paylaşımını ve verilerin kalıcı olmasını sağlar. Volume'lar, container'ların silinmesi durumunda bile verilerin korunmasına olanak tanır.

- Volume oluşturmak için:

```bash
docker volume create my-volume
```

- Volume hakkında ayrıntılı bilgi almak için:

```bash
docker volume inspect my-volume
```

- Volume'u bir container'a bağlamak için:

```bash
docker run -v my-volume:/app my-image
```

- Docker volume oluşturmadan sistemdeki bir dosyayı bağlamak için:

```bash
docker run -v /opt/app:/app my-image
```

- Docker'da oluşturulmuş volume'leri listelemek için:

```bash
docker volume ls
```

# Docker Network

- Docker network'leri listelemek için:

```bash
docker network ls
```

Varsayılan olarak network belirtilmezse, container varsayılan bridge networküne bağlanır.

- Eğer container'ların doğrudan ana bilgisayarın network'ünü kullanmasını istiyorsanız:

```bash
docker run --network=host my-image
```

- Yeni bir bridge network oluşturmak için:

```bash
docker network create my_net
```

- Diğer container'ları bu network'e bağlamak için:

```bash
docker run --name con1 --hostname con1 --network my_net my-image
docker run --name con2 --hostname con2 --network my_net my-image
```

Aynı bridge içindeki container'lar birbirlerine hostname ile ulaşabilirler.

- Çalışan bir container'ı sonradan başka bir bridge ağına bağlamak için:

```bash
docker network connect my_net my_con
```

- Port yönlendirme ile dışarıdan gelen bir portu bağlamak için:

```bash
docker container run -p 3000:80 my-image
```

Bu temel komutlar ve bilgilerle Docker kullanımına başlayabilir, container ve uygulamalarınızı daha verimli ve izole bir şekilde yönetebilirsiniz. Docker'ın sunduğu bu araçlar, uygulamalarınızı daha esnek ve taşınabilir hale getirir. Docker, modern yazılım geliştirme süreçlerinde hız ve verimlilik kazandırarak, devops ve CI/CD süreçlerinin vazgeçilmez bir parçası haline gelmiştir.
