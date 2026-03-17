class UniqueIdgenerator {
  constructor(machineId = 1){
    if(machineId < 0 || machineId > 63){
      throw new Error("machineId must be between 0 and 63");
    }
    this.machineId = BigInt(machineId);
    this.sequence = 0n;
    this.lastTimestamp = -1n;
    this.sequenceBits = 14n;
    this.machineIdBits = 6n;
    this.maxSquence = (1n << this.sequenceBits) - 1n;
    this.machineIdShift = this.sequenceBits;
    this.timeStampShift = this.sequenceBits + this.machineIdBits;
    this.epoch = 1735689600000n; // Jan 1, 2025
  }

  now(){
    return BigInt(Date.now());
  }

  waitNextMillis(lastTimestamp){
    let timestamp = this.now();
    while(timestamp <= lastTimestamp){
      timestamp = this.now();
    }

    return timestamp;
  }

  generate(){
    let timestamp = this.now();

    if (timestamp < this.lastTimestamp) {
      timestamp = this.lastTimestamp;
    }

    if(timestamp === this.lastTimestamp){
      this.sequence = (this.sequence +1n) & this.maxSquence;
      if(this.sequence === 0n){
        timestamp = this.waitNextMillis(timestamp);
      }
    }else{
      this.sequence = 0n;
    }
    this.lastTimestamp = timestamp;

    const Id = ((timestamp - this.epoch) << this.timeStampShift) | (this.machineId << this.machineIdShift) | this.sequence;

    return Id;
  }
}

module.exports = UniqueIdgenerator;