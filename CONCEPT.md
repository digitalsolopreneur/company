# Concept about Collaboration

What is this all about? I propose a structure like molecules, to form an organization. The molecular structure is necessary to satisfy the needs of decision-making in a complex structure. The molecule also preserves the distribution of power in it.


## Entities

1. Atom `At`
  1. Balance `Ba`
  2. Metastruct `Me`

2. Struct `Str`
  1. Balance
  2. Substructs `Sub`
  3. Metastruct
  4. Distribution `Dis`
  5. Distribution ratio `Dis.r``
  5. Distribution interval `Dis.i`
  5. Ambassador `Am`
  6. Rules `R`

3. Proposal `Pr`
  1. Proposal costs `Pc`
  2. Proposal votes `Pv`
  3. Proposal time `Pt`

3. Election `E`
  1. Candidate `Ca`
  2. Candidate votes `Ca.V`

4. Currency `C`

###1. Atom `At`

`At` is the smallest possible entity (e.g. a person). `At` is a special form of a `Str` where the person is automatically the `Am` of his own `Str`, there are no `Sub` and no `Dis`.

`At` owns an amount of `C`, `Ba`. 

###2. Struct

`Str` is composed of at least two `At`. `Str.Am` is one of `Str.Sub` and will be elected by `Str.Sub`.

`Str.Ba` is the amount of `C`, `Str` owns. It is gathered from it's `Sub`s and it's `Me`, according to `Str.Dis` and `Me.Dis`. 

`Str.Dis` is defined by `Str.R`. According to `Str.Dis`, `Str.Ba` and `Str.Sub.Ba` will be distributed. `Dis.r` defines how `Str.Ba` and `Str.Sub.Ba` will be distributed in a `Str`. This distribution will happen in a defined interval `Dis.i`. If no transactions of `Ba` are done, the distribution of `C` in a `Str` will adapt to `Dis` over time.

Contents of `Str.R` can be changed by a successful `Pr` of `Str.Sub`.

`Str` may have a `Me`. `Str` can split itself into max `Count(Str.Sub)/2` `Sub`s and this way become the `Me`. If a `Me m` wants to create a `Pr` in `m.Me`, it needs to elect an `Am`.

###3. Proposal
Every `Am a` can create a `Pr p` in `Am.Me m`. `p.Pc` will be the sum of all `m.Sub.Ba`. `Pv` will be chosen by `a` and must be paid from `a.Ba`.

`p.Pt` is defined in `m.R`. If `p.Pv` is not greater or equal to `p.Pc / 2` within `p.Pt`, it will be rejected. Otherwise will be taken into `m.R`. Afterwards `p.Pv` will be put into `m.Ba`.

###4. Election

`Str.Me m` may have an `Am`, to create `Pr` in `m.Me`. Each of `m.Sub` can propose one of `m.Sub` as the `Ca ca` using his `Ba` to put his votes in `ca.V`. The `Ca` with the highest `Ca.V` will be elected. If all `Ca.V`s are equal, there will be another round. After the election, all `Ca.V`s will be put into `m.Ba`.

###5. Currency
The currency `C` is used to vote for `Pr`s and `Ca`s.

