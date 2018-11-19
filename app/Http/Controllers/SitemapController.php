<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Cache;
use Thepixeldeveloper\Sitemap\Drivers\XmlWriterDriver;
use Thepixeldeveloper\Sitemap\Url;
use Thepixeldeveloper\Sitemap\Urlset;

class SitemapController extends Controller
{
    public function index()
    {
        $cacheKey = 'sitemap';
        $cache    = Cache::get($cacheKey);
        if (! $cache) {
            $urlSet = new Urlset();
            $pages  = [
                'https://arywibowo.com/',
            ];
            foreach ($pages as $page) {
                $urlChild = new Url($page);
                $urlChild->setLastMod(new \DateTime());
                $urlChild->setChangeFreq('always');
                $urlSet->add($urlChild);
            }
            $driver = new XmlWriterDriver();
            $urlSet->accept($driver);
            $cache = $driver->output();
            Cache::put('sitemap', $cache, 10);
        }

        return response($cache)->header('Content-Type', 'text/xml');
    }
}
