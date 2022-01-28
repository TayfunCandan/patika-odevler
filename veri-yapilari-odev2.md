# <strong> Merge Short - Ödev 2
## <strong> [16,21,11,8,12,22] -> Merge Sort

<br>
<br>

### 1. Yukarıdaki dizinin sort türüne göre aşamalarını yazınız.
<br>

```
[16,21,11,8,12,22]
[16,21,11]  [8,12,22]
[16] [21,11]  [8] [12,22]
[16] [21] [11]  [8] [12] [22]
[16,21] [11]   [8,12] [22]
[11,16,21]   [8,12,22]
[8,11,12,16,21,22]


```
<br>
<hr>

### 2. Big-O gösterimini yazınız:

```
n + (n/2) + (n/4) ...+1  
O(nlogn)
```
<br>
<hr>