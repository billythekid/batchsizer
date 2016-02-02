<?php

use App\CommonSize;
use Illuminate\Database\Seeder;

class CommonSizeSeeder extends Seeder
{

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        // type => [description,width, height]
        $types = [
            'paper'       => [
                ['A3 (portrait) at 72 ppi', 842, 1191],
                ['A3 (portrait) at 96 ppi', 1123, 1587],
                ['A3 (portrait) at 150 ppi', 1754, 2480],
                ['A3 (portrait) at 300 ppi', 3508, 4960],
                ['A3 (portrait) at 600 ppi', 7016, 9933],
                ['A3 (portrait) at 720 ppi', 8419, 11906],
                ['A3 (portrait) at 1200 ppi', 14032, 19842],
                ['A4 (portrait) at 72 ppi', 595, 842],
                ['A4 (portrait) at 96 ppi', 794, 1123],
                ['A4 (portrait) at 150 ppi', 1240, 1754],
                ['A4 (portrait) at 300 ppi', 2480, 3508],
                ['A4 (portrait) at 600 ppi', 4960, 7016],
                ['A4 (portrait) at 720 ppi', 5953, 8419],
                ['A4 (portrait) at 1200 ppi', 9921, 14032],
                ['A5 (portrait) at 72 ppi', 420, 595],
                ['A5 (portrait) at 96 ppi', 559, 794],
                ['A5 (portrait) at 150 ppi', 874, 1240],
                ['A5 (portrait) at 300 ppi', 1748, 2480],
                ['A5 (portrait) at 600 ppi', 3508, 4960],
                ['A5 (portrait) at 720 ppi', 4195, 5953],
                ['A5 (portrait) at 1200 ppi', 6992, 9921],
                ['A6 (portrait) at 72 ppi', 298, 420],
                ['A6 (portrait) at 96 ppi', 397, 559],
                ['A6 (portrait) at 150 ppi', 620, 874],
                ['A6 (portrait) at 300 ppi', 1240, 1748],
                ['A6 (portrait) at 600 ppi', 2480, 3508],
                ['A6 (portrait) at 720 ppi', 2976, 4195],
                ['A6 (portrait) at 1200 ppi', 4961, 6992],
            ],
        ];
        foreach ($types as $type => $values)
        {
            foreach ($values as $value)
            {
                CommonSize::create([
                    'type'        => $type,
                    'width'       => $value[1],
                    'height'      => $value[2] ?? $value[1],
                    'description' => $value[0],
                ]);
            }
        }
    }
}
