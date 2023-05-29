interface  Bird {
    eat(): void;
}

interface FishingBird {
    fly(): void;
}

interface SwimmingBird {
    swim(): void;
}

interface RunningBird {
    run(): void;
}

class Tucan implements Bird, FishingBird {
    public fly(): void{ }
    public eat(): void{ }
}

class Hummingbird implements Bird, FishingBird {
    public  fly(): void{ }
    public  eat(): void{ }
}

class Ostrich implements Bird, RunningBird {
    public  eat(): void{ }
    public  run(): void{ }
}

class Penguin implements Bird, SwimmingBird {
    public  eat(): void{ }
    public  swim(): void{ }
}